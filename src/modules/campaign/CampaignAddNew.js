import 'react-quill/dist/quill.snow.css';

import axios from 'axios';
import ImageUploader from 'quill-image-uploader';
import React, { useMemo } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';

import { Button } from '../../components/button';
import FormGroup from '../../components/common/FormGroup';
import FormRow from '../../components/common/FormRow';
import { Dropdown } from '../../components/dropdown';
import { Input, Textarea } from '../../components/input';
import Label from '../../components/label';

Quill.register('modules/imageUploader', ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState('');
  const { handleSubmit, control } = useForm();

  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image']
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append('image', file);
          const response = await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload?key=07d51728383b20e00c6f2b7b5e49683b',
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          return response.data.data.url;
        }
      }
    }),
    []
  );

  const handleAddNewCampaign = (values) => {};

  return (
    <div className="bg-white rounded-xl py-10 px[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title*</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            />
          </FormGroup>
          <FormGroup>
            <Label>Select a category*</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category" />
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description*</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          />
        </FormGroup>
        <FormGroup>
          <Label>Story*</Label>
          <ReactQuill
            placeholder="Write your story......"
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Goal*</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            />
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount*</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            />
            <p className="text-left text-sm text-text3 w-2/3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10, 20, 30, 40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              control={control}
              name="amount"
              placeholder="Video"
            />
            <p className="text-left text-sm text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one" />
              <Dropdown.List></Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select country" />
              <Dropdown.List></Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <Input
              control={control}
              name="start_date"
              placeholder="Start Date"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Input
              control={control}
              name="end_date"
              placeholder="End Date"
            />
          </FormGroup>
        </FormRow>
        <div className="text-center mt-10">
          <Button
            kind="primary"
            className="mx-auto px-10"
          >
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
