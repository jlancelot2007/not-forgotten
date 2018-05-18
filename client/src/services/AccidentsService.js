import Api from '@/services/Api'

export default {
    index () {
         return Api().get('accidents')
    },
    post (accident) {
        return Api().post('accident', accident)
   }
}

