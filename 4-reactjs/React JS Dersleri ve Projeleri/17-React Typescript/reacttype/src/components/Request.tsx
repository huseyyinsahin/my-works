import React from "react";

type RequestProps = {
  status: 'loading' | 'success' | 'error';
};

function Request(props: RequestProps) {
  let message = "";
if(props.status==='loading')
{
    message="Yükleniyor";
}
if(props.status==='success')
{
    message="Başarılı ";
}
if(props.status==='error')
{
    message="hata ";
}
  return <div>{message}</div>;
}

export default Request;
