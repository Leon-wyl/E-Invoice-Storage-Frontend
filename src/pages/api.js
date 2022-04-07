import { getAxios, deleteAxios, postAxios, putAxios } from "../api/base";

export const getInvoiceData = async () => {
  try {
    const res = await getAxios("https://invoice-storage.herokuapp.com/list_all");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postCreateInvoiceData = async () => {
  try {
    const res = await postAxios("http://127.0.0.1:5000/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateExistedData = async () => {
  try {
    const res = await putAxios("http://127.0.0.1:5000/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteExistedData = async (id) => {
  try {
    const res = await deleteAxios("https://invoice-storage.herokuapp.com/delete/v2", {
      params: { invoiceId: id },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
