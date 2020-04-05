/**
 * @apiDefine SuccessParams
 * @apiSuccess {Object} status Show status of the api.
 * @apiSuccess {Number} status.code 0/1 0 for success and 1 for error.
 * @apiSuccess {String} status.message Example "ok".
 */

 /**
  * @apiDefine ErrorResponse
  * @apiError (Error Response) {Object} status Show status of the api.
  * @apiError (Error Response) {Number} status.code 0/1 0 for success and 1 for error.
  * @apiError (Error Response) {String} status.error Custom Errors/ Mongoose Errors etc.
*/

/**
 * @api {get} /api/v1/hotels Get Hotels List
 * @apiName GetHotels
 * @apiGroup Hotels
 * @apiDescription This will return all hotels from third party api
 *
 * @apiUse SuccessParams
 * @apiSuccess {Array} data Hotels response.
 * @apiSuccess {Object[]} data.Hotel
 * @apiSuccess {String} hotel.name Hotel Name.
 * @apiSuccess {Number} hotel.price Booking price.
 * @apiSuccess {Number} hotel.city City Name.
 * @apiSuccess {Array} hotel.availability Booking availability list.
 * @apiUse ErrorResponse
 * @apiSuccessExample {json} Success-Response:
 *{
 *  "status": {
 *      "code": 0,
 *      "message": "OK"
 *  },
 *  "data":
 *      [
 *        {
 *          "name": "Media One Hotel",
 *          "price": 102.2,
 *          "city": "dubai",
 *          "availability": [
 *              {
 *                  "from": "10-10-2020",
 *                  "to": "15-10-2020"
 *              },
 *              {
 *                  "from": "25-10-2020",
 *                  "to": "15-11-2020"
 *              },
 *              {
 *                  "from": "10-12-2020",
 *                  "to": "15-12-2020"
 *              }
 *          ]
 *      }
 *      ]
 */
