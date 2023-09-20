import React, { useState } from "react";
import {
    ChakraProvider,
    FormControl,
    FormLabel,
    Select,
    Input,
    Button,
    Box,
    Text,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export default function Forms(props) {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateError, setDateError] = useState("");
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [timeSlot, setTimeSlot] = useState(""); 
    const [timeSlotError, setTimeSlotError] = useState(""); 

    const handleSubmit = (event) => {
        event.preventDefault();

        setDateError("");
        setNameError("");
        setSurnameError("");
        setTimeSlotError("");


        if (!timeSlot) {
            setTimeSlotError("Please select a time slot");
            return;
        }


        if (!name.trim()) {
            setNameError("Name is required");
            return;
        }

        if (!surname.trim()) {
            setSurnameError("Surname is required");
            return;
        }

        props.onSubmitSuccess(date, timeSlot, name, surname );
    };

    return (
        <ChakraProvider>
            <Box p={4} maxWidth="700px" margin="0 auto">
                <form onSubmit={handleSubmit}>
                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold">Date</FormLabel>
                        <SingleDatepicker
                            name="date-input"
                            date={date}
                            onDateChange={setDate}
                        />
                        {dateError && <Text color="red">{dateError}</Text>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold">Time slot</FormLabel>
                        <Select
                            placeholder="Select option"
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                           
                        >

                            <option value="8:00 AM">8:00 AM</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                        </Select>
                        {timeSlotError && <Text color="red">{timeSlotError}</Text>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold">Name</FormLabel>
                        <Input
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <Text color="red">{nameError}</Text>}
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold">Surname</FormLabel>
                        <Input
                            placeholder="Your surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </FormControl>
                    <Button colorScheme="blue" type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </ChakraProvider>
    );
}