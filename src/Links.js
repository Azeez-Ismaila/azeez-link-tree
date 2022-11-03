import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="text-center">
      <Link to="/contact">
        <a
          href="https://twitter.com/Mr_Zyzie"
          className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
          id="contact"
        >
          Contact
        </a>
      </Link>
      <a
        href="https://twitter.com/Mr_Zyzie"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Mr_zyzie
      </a>
      <a
        id="btn__zuri"
        href="https://training.zuri.team/"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Zuri Team
      </a>
      <a
        id="books"
        href="http://books.zuri.team"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Zuri Books
      </a>
      <a
        id="book__python"
        href="https://books.zuri.team/"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Python Books
      </a>
      <a
        id="pitch"
        href="https://background.zuri.team"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Background Check For Coders
      </a>
      <a
        id="book__design"
        href="https://books.zuri.team/design-rules"
        className="mx-auto block py-4 my-4 rounded bg-gray-100 w-11/12 h-"
      >
        Design Books
      </a>
    </div>
  );
}

export default Links;
