import moment from 'moment';
import React from "react";

const InnerVolDash = (props) => {
  const { org, startDate, img , _id} = props.user;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/user/delete/${id}`,{
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(data=> {
      console.log(data)
    })
  };
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container ">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={img}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">{org}</h2>
                  <p class="text-gray-500">{ moment(startDate).format('D MMMM, YYYY')}</p>
                </div>
                <button onClick={()=>handleDelete(_id)}>Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerVolDash;
