import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';

import axios from 'axios';
import ImageUploader from 'quill-image-uploader';
import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

import { Button } from '../../components/button';
import FormGroup from '../../components/common/FormGroup';
import FormRow from '../../components/common/FormRow';
import { Dropdown } from '../../components/dropdown';
import ImageUpload from '../../components/image/ImageUpload';
import { Input, Textarea } from '../../components/input';
import Label from '../../components/label';
import { apiURL, imgAPI } from '../../config/config';
import useOnChange from '../../hooks/useOnChange';

Quill.register('modules/imageUploader', ImageUploader);

const categoriesData = ['Architecture', 'Education'];

const CampaignAddNew = () => {
  const [content, setContent] = useState('');
  const [countries, setCountries] = useState([]);
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name, defaultValue = '') => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [filterCountry, setFilterCountry] = useOnChange(500);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const resetValues = () => {
    setStartDate('');
    setEndDate('');
    reset({});
  };

  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchCountries();
  }, [filterCountry]);

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
            url: imgAPI,
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

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const handleAddNewCampaign = async (values) => {
    console.log(values);
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate
      });
      toast.success('Create campaign successfully');
      resetValues();
    } catch (error) {
      toast.error('Cannot create new campaign!');
    }
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
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
              <Dropdown.Select
                placeholder={getDropdownLabel('category', 'Select a category')}
                className={getDropdownLabel('category') && '!text-text1'}
              />
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={v4()}
                    onClick={() =>
                      handleSelectDropdownOption('category', category)
                    }
                  >
                    {category}
                  </Dropdown.Option>
                ))}
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
            <Label>Featured Image</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            />
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
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
            <p className="w-2/3 text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10, 20, 30, 40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              control={control}
              name="video"
              placeholder="Video"
            />
            <p className="text-sm text-left text-text3">
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
              <Dropdown.Select
                placeholder={getDropdownLabel('country', 'Select country')}
                className={getDropdownLabel('country') && '!text-text1'}
              />
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                />
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={v4()}
                      onClick={() =>
                        handleSelectDropdownOption(
                          'country',
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Start Date"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              isClearable
              placeholderText="End Date"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10 text-center">
          <Button
            kind="primary"
            className="px-10 mx-auto"
            type="submit"
          >
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
