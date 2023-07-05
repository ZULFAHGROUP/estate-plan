const id = useParams();
const customerList = useSelector((state) => state.customerList);
const { customers, loading, error } = customerList;
const dispatch = useDispatch();
const [me, setMe] = useState([]);

useEffect(() => {
  const new_ = customers.filter((cus) => {
    return cus.user_id == path;
  });
  console.log(new_);
  setMe(new_);
  // if (customers.user_id === "efc41eed-5f92-4b9b-b72b-deeb86d50599") {
  dispatch(listCustomer());
  // }
}, []);

console.log("here: ", me);
