export async function getProperty(id) {
  const url = id ? `/api/properties/${id}` : "/api/properties";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch Properties",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.properties;
}
export async function getHostProperty(id) {
  const url = id ? `/api/host/properties/${id}` : "/api/host/properties";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.properties;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
