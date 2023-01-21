import React from 'react'

const Infohero = () => {
  return (
    <div>
        <style>
            {
            `
            .info-hero{
   
                background-color: #F8F9FA;
                padding: 40px 0;
            }
                i{
                    font-size: 40px;
                  color:#767E86;
                  padding: 30px 0;
                }
                .info-hero p{
                    color:#767E86 ;
                    font-size:18px ;
                }
                h2{
                    font-weight: 400;
                    font-size: 20px;
                }
                .info-hero-container{
                    text-align: center;
                   line-height: 35px;
                }
             
            
            `
            }
        </style>
 <section className="info-hero">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="info-hero-container">
                <i class="fa-regular fa-bell"></i>
                  <h2>Modern Design</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim quam quod odit nam dolore fugiat dolores, dolorum
                    officiis porro facere.
                  </p>
                </div>
              </div>
              <div className="col-4">
             <div className="info-hero-container">
             <i class="fa-regular fa-heart"></i>
             <h2>Build With Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quam quod odit nam dolore fugiat dolores, dolorum officiis
                  porro facere.
                </p>
             </div>
              </div>
              <div className="col-4">
           <div className="info-hero-container">
           <i class="fa-solid fa-bolt"></i>
           <h2>Fast Loading</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quam quod odit nam dolore fugiat dolores, dolorum officiis
                  porro facere.
                </p>
           </div>
              </div>
            </div>
          </div>
        </section>




    </div>
  )
}

export default Infohero