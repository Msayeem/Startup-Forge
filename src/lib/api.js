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



export const getFounderStartup=async(founderId)=>{
  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my/startups?founderId=${founderId}`);
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



export const getOpportunities=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities`, {
      cache:'no-store'
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



export const getApplication=async(userId)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications?userId=${userId}`, {
      cache:'no-store'
    });
    return res.json()
}



export const getFounderApplication=async(founderId)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications?founderId=${founderId}`, {
      cache:'no-store'
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
