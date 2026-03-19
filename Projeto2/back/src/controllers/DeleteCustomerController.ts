import { type FastifyRequest, type FastifyReply } from "fastify"
import {DeleteCustomerService} from '../services/DeleteCustomerService.js'


class DeleteCustomerController{
    async handle(request:FastifyRequest, replay:FastifyReply){
        const { id } = request.query as { id:string }

        const customerService = new DeleteCustomerService();

        const customer = await customerService.execute({ id })

        replay.send(customer);

    }

}



export{DeleteCustomerController}