import Api from '@/services/Api'

export default {
    index () {
         return Api().get('comments')
    },
    comment (comment) {
        return Api().post('comments', comment)
   }
}

