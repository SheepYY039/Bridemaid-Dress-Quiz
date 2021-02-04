import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  EditButton,
  ChipField,
  Create,
  TextInput,
  SimpleForm,
  ImageField,
  SelectArrayInput,
  ReferenceArrayInput,
  Edit,
  Filter,
  ShowButton,
  DeleteButton,
  Show,
  SimpleShowLayout,
  DateField,
  ImageInput,
  UrlField,
} from 'react-admin';

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
    <ReferenceArrayInput reference="Options" label="Tags" source="option">
      <SelectArrayInput>
        <ChipField source="name" />
      </SelectArrayInput>
    </ReferenceArrayInput>
  </Filter>
);

const ProductTitle = ({ record }) => (
  <span>
    Product
    {record ? `"${record.name}"` : ''}
  </span>
);

export const ProductList = (props) => (
  <List
    filters={<ProductFilter />}
    perPage={4}
    {...props}
    title="Products for Quiz"
  >
    <Datagrid>
      <TextField source="name" />
      <ImageField
        label="Product Image"
        source="image.src"
        title="image.title"
      />
      <UrlField source="productPageUrl" />
      <ReferenceArrayField reference="Options" label="Tags" source="option">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ProductShow = (props) => (
  <Show title={<ProductTitle />} {...props}>
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="name" />
      <ImageField
        label="Product Image"
        source="image.src"
        title="image.title"
      />
      <UrlField label="Product Page Url" source="productPageUrl" />
      <ReferenceArrayField reference="Options" label="Tags" source="option">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <DateField source="lastupdate" showTime />
      <TextField source="updatedby" />
    </SimpleShowLayout>
  </Show>
);

export const ProductEdit = (props) => (
  <Edit title={<ProductTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput source="image" label="Product Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <UrlField label="Product Page Url" source="productPageUrl" type="url" />
      <ReferenceArrayInput reference="Options" label="Tags" source="option">
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="index" disabled />
      <TextInput source="name" />
      <ImageInput source="image" label="Product Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput label="Product Page Url" source="productPageUrl" type="url" />
      <ReferenceArrayInput reference="Options" label="Tags" source="option">
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
