import { getAxios, deleteAxios, postAxios, putAxios } from "../api/base";

export const getInvoiceData = async (
  filterKey = "filter",
  filterValue = ""
) => {
  try {
    const listAll = filterKey === "filter" || filterValue === "" ? true : false;
    const url = `https://simplee-invoicing.herokuapp.com/list${
      listAll ? "_all" : ""
    }`;
    const res = await getAxios(url, {
      params: listAll ? {} : { filterKey, filterValue },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendInvoiceData = async (invoiceId, email) => {
  try {
    const res = await getAxios(
      "https://simplee-invoicing.herokuapp.com/download",
      {
        params: { invoiceId: invoiceId, email: email },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postCreateInvoiceData = async () => {
  try {
    const res = await postAxios("https://simplee-invoicing.herokuapp.com/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateExistedData = async () => {
  try {
    const res = await putAxios("https://simplee-invoicing.herokuapp.com/");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteExistedData = async (id) => {
  try {
    const res = await deleteAxios(
      "https://simplee-invoicing.herokuapp.com/delete/v2",
      {
        params: { invoiceId: id },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
