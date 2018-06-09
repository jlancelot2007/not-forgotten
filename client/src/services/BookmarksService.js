import Api from '@/services/Api'

export default {
    index (bookmarkId) {
         return Api().get('bookmarks', {
             params: bookmarkId
         })
        }, 
      
    post ({bookmark})   {
        return Api().post('bookmark', {
            params: bookmark
        })
    },
    delete (bookmarkId) {
        return Api().get(`bookmarks/${bookmarkId}`)
    }
}