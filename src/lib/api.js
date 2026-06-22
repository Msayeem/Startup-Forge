

export const uploadImageToImgBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Image upload failed");
  }

  const data = await res.json();
  return data.data.url; // returns the hosted image URL
};



export const createStartup=async(startup)=>{
  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/startups`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            // ...await authHeader()
        },
        body:JSON.stringify(startup)
    });

    return res.json()
}







export const createOpportunity=async(newOpportunityData)=>{

  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities`, {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newOpportunityData)
  });
  return res.json()
}









export const postApplication=async(applicationData)=>{
       const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            // ...await authHeader()
        },
        body:JSON.stringify(applicationData)
    });

    return res.json()
}






export const updateFounderApplication=async(id, data)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications/${id}`, {
      method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res.json();
}


export const updateUser=async(id, data)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`, {
      method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res.json();
}


export const updateStartup=async(id, data, token)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/startups/${id}`, {
      method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data)
    });
    return res.json();
}





export const createSubscription=async(subInfo)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/subscriptions`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
           
        },
        body:JSON.stringify(subInfo)
    });

    return res.json()
}
