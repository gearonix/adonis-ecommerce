import {FC} from 'react'
import {AddProductTemplate} from 'entities/Profile/AddProduct'
import {ProductImages} from 'features/Profile/ProductImage'
import {useForm} from "react-hook-form";
import {AddProductForm} from "widgets/Profile/types";
import {yupResolver} from "@hookform/resolvers/yup";
import {addProductSchema} from "widgets/Profile/lib/formSchemes";
import {createFieldValues} from "shared/lib/helpers/others";

const AddProduct: FC<{ cancel: () => void }> = ({cancel}) => {
  const form = useForm<AddProductForm>({resolver: yupResolver(addProductSchema)})
  const reg = createFieldValues<AddProductForm>(form)

  const onSubmit = (formValues: AddProductForm) => {
    console.log(formValues)
  }



  return <AddProductTemplate submitForm={form.handleSubmit(onSubmit)} cancel={cancel}
  ProductImages={<ProductImages/>} reg={reg} />
}

export default AddProduct
