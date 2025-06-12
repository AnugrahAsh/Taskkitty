import Food from '../assets/food.png'

const ContactUs = () => {
  return (
    <div className='mx-30 mt-10'>
      <h1 className='text-3xl mb-10'>Contact Us</h1>
      <div className='flex  items-center bg-blue-200 justify-around rounded-2xl'>
        <img src={Food} alt="" />
        <form action="" className='flex flex-col gap-5'>
            <input type="text" className='bg-amber-100 text-black rounded-md px-4 h-15 w-120 py-3' placeholder='Full Name'/>
            <input type="text" className='bg-amber-100 text-black rounded-md px-4 h-15 py-3' placeholder='Email'/>
            <textarea name="" className='bg-amber-100 text-black rounded-md px-4 h-40 py-3' id="" placeholder='Message'></textarea>
            <button className='bg-[crimson] text-white rounded-md m-auto px-10 pb-2 text-3xl'>Send!</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
