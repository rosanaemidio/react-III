import React, { Fragment } from 'react'
import Card from '../components/Card/Card'

const produtos = [
    {
        id: 1,
        title: "Fifa 19 - PS4",
        img: "https://uploads.metropoles.com/wp-content/uploads/2019/09/06171509/xapa.jpg",
        text: "29,90"
    },
    {
        id: 2,
        title: "Relógio ",
        img: "https://www.fishtv.com/uploads/noticias/sidebar/400x300/abertura-3-400x300.jpg",
        text: "299,90"
    },
    {
        id: 3,
        title: "Fifa 19",
        img: "http://portalmelhoresamigos.com.br/wp-content/uploads/2017/02/peixe-mar_DOMINIO_PUBLICO.jpg",
        text: "29,90"
    },
    {
        id: 4,
        title: "Fifa 19",
        img: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=MzFkS+lG7hEcuIQDIjInCAR3oauDpRR/j6cMv0tmG1Bi82F90RZAAcIOGnEeZ6JeiBe6F4m3pDEENRU8tY8twm+ioiqPo0qFWqTwRI0xepKp/Tk=",
        text: "29,90"
    },
    {
        id: 5,
        title: "Fifa 19",
        img: "https://cdn1.campograndenews.com.br/uploads/tmp/images/5247780/640x480-db5de64cd9dfab6b066c0ec2dcf6347b.jpg",
        text: "29,90"
    },
    {
        id: 6,
        title: "Fifa 19",
        img: "https://http2.mlstatic.com/lote-com-20-unid-peixe-palhaco-ocelaris-preco-para-atacado-D_NQ_NP_900038-MLB27109155440_032018-F.jpg",
        text: "29,90"
    },
    {
        id: 7,
        title: "Fifa 19",
        img: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2016/09/peixe-boca.jpg",
        text: "29,90"
    },
    {
        id: 8,
        title: "Fifa 19",
        img: "https://blog.terrazoo.com.br/wp-content/uploads/2019/02/1-PEIXES-COLORIDOS.jpg",
        text: "29,90"
    },
    {
        id: 9,
        title: "Fifa 19",
        img: "https://rvtv.com.br/wp-content/uploads/2018/10/peixes-capa-696x292.jpg",
        text: "29,90"
    },
    {
        id: 10,
        title: "Fifa 19",
        img: "",
        text: "29,90"
    }
]

const Produtos=()=>{
    return(
        <Fragment>
            {produtos.map(item=>(
              <Card   key={item.id}    
               lalala={item} />  
            ))}
        </Fragment>
    )
}
export default Produtos;
    