import React, { useState } from "react";
import useFetch from "../../utils/hooks/useFetch";
import UnstyledButton from "../../components/unstyled/button/button";
import UnstyledPopup from "../../components/unstyled/popup/popup";
import UnstyledSlider from "../../components/unstyled/slider/slider";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { loading, data, error } = useFetch("http://localhost:9000/api/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(data);
    return <div>Error</div>;
  }
  return (
    <div>
      <UnstyledButton className="bannu" onClick={() => setOpen(true)}>
        Click
      </UnstyledButton>
      <UnstyledSlider
        open={open}
        direction="right"
        onClose={() => setOpen(false)}
      >
        <div>Slider content</div>
      </UnstyledSlider>
      {data?.data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
