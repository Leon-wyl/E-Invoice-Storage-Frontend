import { getAxios, deleteAxios, postAxios, putAxios } from "../api/base";

export const getInvoiceData = async (
  filterKey = "filter",
  filterValue = ""
) => {
  try {
    const listAll = filterKey === "filter" || filterValue === "" ? true : false;
    const url = `http://127.0.0.1:5000/list${listAll ? "_all" : ""}`;
    const res = await getAxios(url, {
      params: listAll ? {} : { filterKey, filterValue },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendInvoiceData = async (invoiceId) => {
  try {
    const res = await getAxios("http://127.0.0.1:5000/send", {
      params: { invoiceId: invoiceId },
    });
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
    const res = await deleteAxios("http://127.0.0.1:5000/delete/v2", {
      params: { invoiceId: id },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
