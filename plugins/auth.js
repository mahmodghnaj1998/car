import cookies from 'js-cookie'
export default ({ store, app: { $axios } }) => {
    $axios.setToken(cookies.get('token'), 'Bearer')
}