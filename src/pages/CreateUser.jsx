import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createData } from "../data";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Header from "../components/Header";

export default function CreateUser() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // react-hook-form الفانكشن دي كلها جهزه من مكنبه
  // register بتفيدك في تسميت الانبوت بتاعك وفيه حاله ارسال البيانات بتشوف هل في اي اخطاء تتطابق مع اخطاء الي حطتها في الفانكشن وبترجع صح او خطاء
  // handleSubmit الفانكشن دي بتتنفذ في حاله ان كل الانبوتس مفيهاش اخطاء بعد ارسال البيانات
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => handleClick();

  const regEmail =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  return (
    <Box>
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
          <TextField
            // هنا باخد الايرور الي ممكن يرجعلي من المكتبه في حاله ان في بيانات داخله غلط في الانبوت بتاعي
            // وبستخدم الفانكشن بتاعت البولين عشان اضمن ان القيمه الي هترجع هي صح او خطاء ويحسن من جوده الكود
            error={Boolean(errors.firstName)}
            // لو صح الايرور الي بيساعد الناس مش هيظهر لو غلط هيظهر عشان يفهم المستخدم الغلط فين
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.firstName)
                ? "This field is required & min 3 character"
                : null
            }
            // هنا حطيت اسم الانبوت والشروط الي لازم تتحقق عشان ميحصلش اخطاء
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: "1" }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: "1" }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.phone)}
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.phone) ? "Please provide a valid Phone number" : null
          }
          {...register("phone", { required: true, pattern: phoneRegExp })}
          label="Contact Number"
          variant="filled"
        />

        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />

        {/* ديه الطريقه الاولي لاختيار الاشياء علي شكل سليكت */}
        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {createData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            create new user
          </Button>

          <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%", color: "white" }}
            >
              This is a success Alert inside a Snackbar!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}

// طريقه تانيه لبناء انبوت تقدر تختار منه اكتر من اختيار
// <FormControl variant="filled" sx={{ minWidth: 120 }}>
//   <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
//   <Select
//     labelId="demo-simple-select-filled-label"
//     id="demo-simple-select-filled"
//     value={role}
//     onChange={handleChange}
//   >
//     <MenuItem value="user">User</MenuItem>
//     <MenuItem value="manager">Manager</MenuItem>
//     <MenuItem value="admin">Admin</MenuItem>
//   </Select>
// </FormControl>
