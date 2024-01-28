let numberType: number;
let stringType: string;
let anyType: any;
let unionType: number | string;

unionType = 1;
unionType = "1";

// function printStatusCode(statusCode: number | string) {
//   console.log(statusCode.toUpperCase());
// }

// printStatusCode("200");

function printStatusCode2(statusCode: number | string) {
  if (typeof statusCode === "number") {
    if (statusCode === 404) {
      console.log("Not Found");
    } else if (statusCode === 200) {
      console.log("OK");
    }
  } else {
    console.log("My statusCode is " + statusCode.toUpperCase());
  }
}

printStatusCode2(404);
