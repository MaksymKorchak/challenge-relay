// @flow
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CreateProductForm from "../../components/Product/Form/Create";

function CreatePage() {

  return (
    <>
        <Box m={4}>
            <Typography align="center" variant="h2">Create Product</Typography>
        </Box>
        <CreateProductForm/>
    </>
  );
}




export default CreatePage;
