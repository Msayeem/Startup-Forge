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
  const res=await fetch(`${process.env.SERVER_URL}/startups`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            // ...await authHeader()
        },
        body:JSON.stringify(startup)
    });

    return res.json()
}