import './App.css'
import recipeImage from './assets/images/image-omelette.jpeg'
function App() {

  return (
    <div className='container md:max-w-3xl rounded-md  m-auto max-w-md p-6  mt-3 shadow-2xl h-auto md:mb-8 '>
      <div className='image-container'>
        <img className=' rounded-md' src={recipeImage} alt="recipe-image" />
      </div>

      <div className="text  mt-4">
        <h1 className='font-semibold md:text-4xl text-xl'>Simple Omlete Recipe</h1>
        <p className='mt-4 text-slate-600'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats. </p>
      </div>

      <div className="prepation-time mt-6 bg-pink-50 p-4 rounded-md">
        <h2 className='text-md  text-red-800 font-bold'>Preparation Time</h2>
        <ul className='mt-2 list-disc text-red-800 ml-4'>
          <li className='text-sm mt-2 ml-6 text-slate-800'><span className='text-slate-700 font-semibold mr-1'>Total:</span>Approximately 10 minutes</li>
          <li className='text-sm mt-2 ml-6 text-slate-800'><span className='text-slate-700 font-semibold mr-1'>Prepation:</span> 5 minutes</li>
          <li className='text-sm mt-2 ml-6 text-slate-800'><span className='text-slate-700 font-semibold mr-1'>Cooking:</span>5 minutes</li>
        </ul>
      </div>

      <div className="ingredents mt-4 p-4">
        <h2 className='text-4xl text-red-800'>Ingredents</h2>
        <ul className='mt-4 text-slate-600 font-normal'>
          <li className='mt-2 list-disc text-sm ml-6'>2-3 large eggs</li>
          <li className='mt-2 list-disc text-sm ml-6'>Salt, to taste</li>
          <li className='mt-2 list-disc text-sm ml-6'>Pepper, to taste</li>
          <li className='mt-2 list-disc text-sm ml-6'>1 tablespoon of butter or oil </li>
          <li className='mt-2 list-disc text-sm ml-6'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>

      <div className='hr w-full border-b-2 mt-4'></div>

      <div className="instructions  p-6">
        <h2 className='text-4xl text-red-800'>Instructions</h2>
        <ul className='mt-4 list-inside list-decimal text-sm'>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Beat The Eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Heat The Pain:</span> Place a non-stick frying pan over medium heat and add butter or oil. </li>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Add fillings (optional)</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. </li>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li className='mt-4 text-slate-800'><span className='text-slate-600 font-bold text-sm'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
        </ul>
      </div>

      <div className='hr w-full border-b-2 mt-4'></div>

      <div className='recipe-tabel  p-6 pt-3'>
        <h2 className='text-4xl text-orange-800 mt-4'>Nutrition</h2>
        <p className='mt-4 text-sm font-semibold text-slate-600 md:text-nowrap'>The table below shows nutritional values per serving without the additional fillings</p>

        <table className='w-full mt-4 md:ml-5'>
          <tbody className='flex flex-col gap-5 text-sm font-normal'>
            <tr className='grid grid-cols-2 md:grid-cols-3  border-b-2  px-2'>
              <td className='text-slate-500  border-slate-600'>Calaries</td>
              <td className='text-red-800 font-bold'>27kcal</td>
            </tr>

            <tr className='grid grid-cols-2 md:grid-cols-3  border-b-2  px-2'>
              <td className='text-slate-500'>Carbs</td>
              <td className='text-red-800 font-bold'>0g</td>
            </tr>

            <tr className='grid grid-cols-2 md:grid-cols-3  border-b-2  px-2'>
              <td className='text-slate-500'>Protien</td>
              <td className='text-red-800 font-bold'>20g</td>
            </tr>

            <tr className='grid grid-cols-2 md:grid-cols-3  border-b-2  px-2'>
              <td className='text-slate-500'>Fat</td>
              <td className='text-red-800 font-bold'>22g</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default App
