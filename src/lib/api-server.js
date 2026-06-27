import { getUserToken } from "./session";

export const getFounderStartup=async(founderId)=>{
      const token=await getUserToken();
  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my/startups?founderId=${founderId}`,{
       headers: {
      ...(token && { Authorization: `Bearer ${token}` }),

    },
  });
  return res.json()
}



export const getOpportunities = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error('getOpportunities failed:', err.message);
    return [];
  }
};



export const getUsers=async()=>{
  const token=await getUserToken();
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
      cache:'no-store',
       headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    });
return res.json()
}


export const getStartups = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/startups`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error('getStartups failed:', err.message);
    return [];
  }
};





export const getFounderOpportunities=async(founderId)=>{
    const token=await getUserToken();
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities?founderId=${founderId}`, {
      cache:'no-store',
        headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    });
    return res.json()
}


export const getApplication=async(userId)=>{
    const token=await getUserToken();
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications?userId=${userId}`, {
      cache:'no-store',
        headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    });
    return res.json()
}



export const getFounderApplication=async(founderId)=>{
    const token=await getUserToken();
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications?founderId=${founderId}`, {
      cache:'no-store',
        headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    });
    return res.json()
}


export const getPlanById=async(planId)=>{
 const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/plans?plan_id=${planId}`);
 return res.json()
}