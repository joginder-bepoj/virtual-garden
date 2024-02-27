import React from 'react'
import './search.css'
import PlantRating from '../../../Assets/PlantRating'
function Search() {
  const popularPlants = ['Flowering Plants', 'Fruit Trees', 'Herbs', 'Vegetables', 'Indoor Plants', 'Succulents', 'Cacti']
  return (
    <>

      <h3 className='mt-3 mx-2'>Discover New Plants</h3>
      <div className='d-flex gap-4 mt-5'>
        <input type="text" placeholder='Search plants' className='user-search-page-input' />
        <button className='go-button'>Go</button>
      </div>
      <hr className='w-75 mt-5' />
      <h5 className='my-3'>Popular Plants</h5>
      <div className='d-flex gap-3 flex-wrap'>
        {
          popularPlants.map((elm, ind) => <p className='popularPlants-items' >{elm}</p>)
        }
      </div>
      <hr className='w-75 mt-5' />
      <h5 className='my-3'>Categories</h5>
      <div className='d-flex gap-4 mt-5'>
        <div>
          <input  className='mx-2 form-check-input' type="checkbox" name="PlantCare" id="PlantCare" />
        <label htmlFor="PlantCare">PlantCare</label>
        </div>
        <div>
          <input className='mx-2 form-check-input'  type="checkbox" name="" id="PlantingTips" />
          <label htmlFor="PlantingTips">Planting Tips</label>
        </div>
        <div>
          <input className='mx-2 form-check-input'  type="checkbox" name="" id="GardeningTools" />
          <label htmlFor="GardeningTools">Gardening Tools</label>
        </div>
        <div>
          <input className='mx-2 form-check-input'  type="checkbox" name="" id="PlantDiseases" />
        <label htmlFor="PlantDiseases">  Plant Diseases</label>
        </div>
        <div>
          <input className='mx-2 form-check-input'  type="checkbox" name="" id="PlantDesign" />
          <label htmlFor="PlantDesign">Plant Design</label>
        </div>
      </div>


      <div>
        <PlantRating/>
        <PlantRating/>
        <PlantRating/>
        <PlantRating/>
        <PlantRating/>
      </div>
    </>
  )
}

export default Search