import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import LoadingOverlay from "../components/loadingOverlay"

interface ContactPageState {
  form: {
    name: string
    message: string
    loading: boolean
    loadingMessage: string
    result: string
  }
}

class ContactPage extends React.Component<any, ContactPageState> {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        message: "",
        loading: false,
        loadingMessage: "",
        result: "",
      },
    }
  }
  render() {
    let { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Contact" />
        {/* Hero */}
        <h1 className="m-5 text-2xl text-center">Contact form</h1>
        <div className="mx-auto max-w-md  bg-teal-400 result m-4 font-bold text-xl text-center">
          {this.state.form.result || ""}
        </div>
        <form
          action="https://frozen-feedback.herokuapp.com"
          method="POST"
          className="max-w-md mx-auto"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit.bind(this)}
        >
          {/* Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md text-center font-bold mb-2"
              htmlFor="name"
            >
              Name and Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={this.state.form.name}
              onChange={this.handleChange.bind(this)}
              type="text"
              placeholder="Name/Email"
              name="name"
              maxLength={200}
              required
            />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label
              className="block text-gray-700  text-md text-center font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
              id="message"
              placeholder="Message"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.message}
              name="message"
              rows={5}
              maxLength={3896}
              required
            />
          </div>
          {/* Filename */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md text-center font-bold mb-2"
              htmlFor="file"
            >
              File
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              placeholder="File"
              name="file"
            />
          </div>
          <div className="mb-4 text-center">
            <input
              className="focus:outline-none bg-buttonbgp text-buttontxp font-semibold rounded-full py-3 md:py-4 px-5 md:px-8 shadow-lg uppercase tracking-wider text-sm disabled:opacity-75 "
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <LoadingOverlay
          isLoading={this.state.form.loading}
          message={this.state.form.loadingMessage}
        />
      </Layout>
    )
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ form: { ...this.state.form, [e.target.id]: e.target.value } })
  }
  validate() {
    return this.state.form.message != "" && this.state.form.name != ""
  }
  async handleSubmit(e: HTMLFormElement) {
    e.preventDefault()
    if (!this.validate()) {
      alert("Invalid input. Check your name and message!")
      return
    }
    let data = new FormData()
    data.append("name", this.state.form.name)
    data.append("message", this.state.form.message)
    let fileInput = document.getElementById("file") as HTMLInputElement
    let file = fileInput.files[0]
    if (file) {
      data.append("file", file)
    }

    try {
      this.setState({
        form: {
          ...this.state.form,
          loadingMessage: "Trying to send a message, please wait...",
          loading: true,
        },
      })
      let result = await fetch("https://frozen-feedback.herokuapp.com/api", {
        method: "POST",
        body: data,
      })
      let json = await result.json()
      if (json.type === "success") {
        this.setState({
          form: {
            ...this.state.form,
            result: "Your message has been delivered. Thank you for your feedback!",
            loading: false,
          },
        })
      } else {
        this.setState({
          form: {
            ...this.state.form,
            result: "Something went wrong, contact me on social media instead...",
            loading: false,
          },
        })
      }
      console.log(json)
    } catch (e) {
      console.log(e)
      this.setState({
        form: {
          ...this.state.form,
          result: "Something went wrong, contact me on social media instead...",
          loading: false,
        },
      })
    }
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
