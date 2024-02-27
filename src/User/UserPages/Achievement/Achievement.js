import React from 'react'
import Trophy from '../../../Assets/trophy-ach.png'
import "./achivement.css"
function Achievement() {
    
    return (
        <>
            <h1 className="text-center m-4 mb-5">Achievements</h1>
            <div className="row">
                <div className="col-12 col-md-7">
                    <img className='img-fluid' src={Trophy} alt="Trophy" />
                </div>
                <div className="col-12 col-md-5">
                   
                        <div className=" m-0 p-0 pt-5">
                            <div className="row">
                                <div className='col-3 achivement-box-1'>15</div>
                                <div className='col-9 text-start'>
                                    <h3 className='achivement-heading-1' >Total Garden</h3>
                                    <p className='font-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, similique. Odit ipsam dolor accusantium.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-3 achivement-box-2'>3</div>
                                <div className='col-9 text-start'>
                                    <h3 className='achivement-heading-2' >Totals Milestone</h3>
                                    <p className='font-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, similique. Odit ipsam dolor accusantium.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-3 achivement-box-3'>12</div>
                                <div className='col-9 text-start'>
                                    <h3 className='achivement-heading-3' >Goals Completed</h3>
                                    <p className='font-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, similique. Odit ipsam dolor accusantium.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-3 achivement-box-4'>2</div>
                                <div className='col-9 text-start'>
                                    <h3 className='achivement-heading-4' > Total Medals</h3>
                                    <p className='font-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, similique. Odit ipsam dolor accusantium.</p>
                                </div>
                            </div>
                        </div>
                    
                </div>

            </div>
        </>
    )
}

export default Achievement