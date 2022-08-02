import axios from "axios";

async function createFund() {
  await axios.post("fund/add").then((response) => {});
}

async function readFund() {
  await axios.get("fund/total").then((response) => {});
}

async function updateFund(fundId) {
  await axios.put(`fund/${fundId}`).then((response) => {
  });
}

async function deleteFund(fundId) {
  await axios.delete(`fund/${fundId}`).then((response) => {
  });
}

const FundService = {
  createFund,
  readFund,
  updateFund,
  deleteFund,
};

export default FundService;
