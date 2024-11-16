const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="mx-w-lg">
          <div className=" max-w-md  text-2xl font-bold ">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>

          <div className="max-w-md  font-medium text-xl mt-4">Julies Winfield</div>
          <div className="max-w-md  font-medium text-sm text-slate-500">
            CEO | Acme Corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
