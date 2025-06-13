import express from 'express'
import { getall,maketask,gettask,updatetask,deltask } from '../controllers/ctasks.js' //importing the controllers
export const router = express.Router()//exporting the router

router.route('/').get(getall).post(maketask)//router routes all paths going to / or in this case /api/v1 because that's added in app.use(/api/v1) to the getall controller if its a get (read) request and to the maketask controlller if its a put (make) request
router.route('/:id').get(gettask).patch(updatetask).delete(deltask) //if theres anything after the /api/v1 we take that as id, if its a get req we give it to the controller that handles reading, llrly for updates and delete