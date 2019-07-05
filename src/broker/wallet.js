
/**
 * [WalletGenerator description]
 * @type {class}
 */
export class WalletGenerator {
    /**
     * [constructor init generator and listener]
     * @param  {broker.CoreStackProducer} producer [description]
     * @param  {broker.CoreStackConsumer} endpoint [description]
     */
    constructor(producer, consumer) {
      this.producer = producer
      this.consumer = consumer
      this.pendingWallets = {}
      this.listening()
      this.pause()
    }

    /**
     * [pause stop consuming on kafka]
     *
     * @return  {[type]}  [return description]
     */
    pause = () => {
      if (Object.keys(this.pendingWallets).length === 0) {
        this.consumer.consumer.pause()
        return
      }
    }

    /**
     * [resume consuming on kafka]
     *
     * @return  {[type]}  [return description]
     */
    resume = () => {
      if (Object.keys(this.pendingWallets).length > 0) {
        this.consumer.consumer.resume()
        return
      }
    }

    /**
     * [listening consumes message and pass to handler]
     *
     * @return  {[type]}  [return description]
     */
    listening = () => {
      this.consumer.consume().on('message', message => this.walletHandler(message))
      return
    } 

    /**
     * [walletHandler handles wallet creation message]
     * @param  {Object} msg   [Kafka node raw message]
     * @return {[type]}       [description]
     */
    walletHandler = msg => {
      const envelope = msg['value']
      
      // if no metadata id exist 
      if (!envelope['metadata'] || !envelope['metadata']['id']) {
        return 
      }
      const id = envelope['metadata']['id']
      if (!this.pendingWallets[id]) {
        return
      }

      this.pendingWallets[id].resolve(envelope['from'])
      // We delete the callback in order to avoid memory leaks
      delete this.pendingWallets[id]

      this.pause()
    }

    /**
     * [generate creates a message for creating a wallet to kafka and returns a promise to be resolved in walletHandler ]
     * @return {Promise} [Promise to be resolved in the walletHandler]
     */
    generate = async () => {
      const msg = await this.producer.send({})

      const res = new Promise((resolve, reject) => {
        this.pendingWallets[msg.id] = {resolve, reject}
      })
      this.resume()
      
      return res
    }
}
