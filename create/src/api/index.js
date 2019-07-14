export const fetchs = () => {
  return fetch('http://47.102.104.108:8088/profile/api/v1/passengerAccount/vehicleInfo?vehicleGps=121.4737%2C31.23037')
  .then((res => {
    return res.json()
  })).then((res => {
    return res
  }))
}