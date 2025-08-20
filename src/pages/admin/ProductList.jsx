const products = [
  { id: 1, name: 'آیفون 16', price: '$1000', category: 'موبایل', status: 'موجود', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'تبلت', price: '$1500', category: 'تبلت', status: 'ناموجود', image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'لپ تاپ ASUS', price: '$2000', category: 'لپ تاپ', status: 'موجود', image: 'https://via.placeholder.com/50' },
];

export default function ProductList() {
  const handleAddProduct = () => {
    alert("اینجا بعداً فرم آپلود محصول اضافه می‌کنیم 😄");
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>لیست محصولات</h2>
        <button className="btn btn-success" onClick={handleAddProduct}>
          + افزودن محصول
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>تصویر</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>دسته‌بندی</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td><img src={p.image} alt={p.name} width="50" /></td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.status}</td>
                <td>
                  <button className="btn btn-sm btn-primary mx-2">
                    ویرایش
                  </button>
                  <button className="btn btn-sm btn-danger mx-2">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}