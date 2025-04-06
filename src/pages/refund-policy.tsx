const RefundPolicy = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/pdfs/refundPolicy.pdf"
        className="w-full h-full border-0"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0
        }}
        title="Refund Policy"
      />
    </div>
  );
};

export default RefundPolicy; 