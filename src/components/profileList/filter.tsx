"use client";
import { useState, useEffect } from "react";
import { Form, FormItem, FormLabel, FormControl, Input } from "@/components/ui";
import { useForm, Controller } from "react-hook-form";

const ProfileFilter = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const methods = useForm({ defaultValues: filters });

  useEffect(() => {
    setLocalFilters(filters);
    methods.reset(filters);
  }, [filters, methods]);

  const handleChange = (name, value) => {
    const newFilters = { ...localFilters, [name]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Form {...methods}>
      <form className="space-y-4">
        <Controller
          name="instrument"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="instrument">Instrument</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  id="instrument"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("instrument", e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Controller
          name="location"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="location">Location</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  id="location"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("location", e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Controller
          name="level"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="level">Level</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  id="level"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("level", e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProfileFilter;
