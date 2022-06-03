import React from 'react'
import "./navbar.css"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink

} from '@chakra-ui/react'



function Navbar() {
  return (
    <div  className='container'>
             <Breadcrumb separator='    ' fontWeight='medium' fontSize='l'>
               
 <div className='first'>
 <BreadcrumbItem>
    <BreadcrumbLink className='logo ' href='#'>Logo  </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Inspiration</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Find Work</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Learn Design</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>HIre Designers</BreadcrumbLink>
  </BreadcrumbItem>

 </div>

<div className='second'>
          
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Sign In</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink className='sign' href='#'>Sign Up</BreadcrumbLink>
  </BreadcrumbItem>

</div>

</Breadcrumb>
    </div>
  )
}

export default Navbar;

