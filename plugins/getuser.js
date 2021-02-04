export default ({ store }) => {
    store.dispatch('getuser')
    store.dispatch('getcars')
    store.dispatch('getback')

}