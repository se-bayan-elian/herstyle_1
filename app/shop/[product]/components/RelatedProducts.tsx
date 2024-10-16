import { ShoppingBag, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function RelatedProducts() {
  return (
    <div className="space-y-6">
    {[1, 2, 3].map((index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-row-reverse items-center">
        <div className="relative w-1/5 h-32">
          <Image
            src={`/products/${index}.jpg`}
            alt={`Related product ${index}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-4/5 pr-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
             <span className="font-bold text-lg text-purple">102.00 ر.س</span>
             <div className='flex items-center'>
            <div className="flex items-center mr-2">
                <span className="text-sm text-gray-600 mr-2">(25)</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-right">منتج باوند أمبولز</h3>
            </div>
          </div>
          <p className="text-right text-sm text-gray-600 mb-4">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.
          </p>
          <div className="flex justify-end items-center">
            <button className=" flex border border-purple-600 items-center text-purple px-4 py-2 rounded-md text-sm hover:bg-purple-200 transition duration-300">
              إضافة للسلة
              <ShoppingBag className='w-4 h-4 ml-2' />
            </button>
            
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default RelatedProducts