import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newTitle, setNewTitle] = useState("");

const staticProducts = [
  { id: 101, name: 'آیفون 16', price: '$1000', category: 'موبایل', status: 'موجود', image: 'https://via.placeholder.com/50' },
  { id: 102, name: 'تبلت', price: '$1500', category: 'تبلت', status: 'ناموجود', image: 'https://via.placeholder.com/50' },
  { id: 103, name: 'لپ تاپ ASUS', price: '$2000', category: 'لپ تاپ', status: 'موجود', image: 'https://via.placeholder.com/50' },
];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("خطا در دریافت محصولات");
        const data = await res.json();
        setProducts([...staticProducts, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      title: "محصول جدید",
      price: 0,
      category: "عمومی",
      image: "https://via.placeholder.com/50",
      status: "موجود",
    };
    setProducts([newProduct, ...products]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewTitle(product.title);
  };

  const handleSaveEdit = () => {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id ? { ...p, title: newTitle } : p
      )
    );
    setEditingProduct(null);
  };

  if (loading) return <p className="text-center">در حال بارگذاری...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

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
                <td>
                  <img src={p.image} alt={p.title} width="50" />
                </td>
                <td>
                  {editingProduct?.id === p.id ? (
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                  ) : (
                    p.title || p.name
                  )}
                </td>
                <td>${p.price}</td>
                <td>{p.category}</td>
                <td>{p.status || "موجود"}</td>
                <td>
                  {editingProduct?.id === p.id ? (
                    <button
                      className="btn btn-sm btn-primary my-2"
                      onClick={handleSaveEdit}
                    >
                      ذخیره
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary my-2"
                      onClick={() => handleEdit(p)}
                    >
                      ویرایش
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-danger my-2"
                    onClick={() => handleDelete(p.id)}
                  >
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