import React from 'react'
import ServiceTile from './ServiceTile'
import styles from './Services.module.css'
import {services} from '../../helpers/Constants'

const Services = () =>{
    return <div className={styles.servicesWrapper}>
        {services.map((service)=><ServiceTile key={service.title} title={service.title} subTitle={service.subTitle} image={service.image} url={service.onClickUrl}/>)}
        </div>
}

export default Services