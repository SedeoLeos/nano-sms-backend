const drawerCss =[
  {
    sidbar:'sm:fixed transition-transform -translate-x-full sm:translate-x-0 ',
    button:'inline-flex sm:hidden ',
    main:'sm:left-72',
    navbar:'sm:left-72 left-0'
  },
  {
    sidbar:'shadow-1 sm:shadow-none transition-transform translate-x-0 sm:-translate-x-full',
    button:'sm:inline-flex',
    main:'left-0',
    navbar:'left-0'
  }
]
export const useDrawer = () => {
  const drawer = useState('drawer:state',()=>({
    open:true,
   layout:drawerCss[0]
  }))
  const toogle = ()=>{
    drawer.value.open=!drawer.value.open
    if(drawer.value.open){
      drawer.value.layout= drawerCss[0]
    }else{
      drawer.value.layout= drawerCss[1]
    }
  }
    return {
    toogle,
    drawer
  }
}
