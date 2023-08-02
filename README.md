# SPA-workshop-nextjs-dynamic-routes

## Why learn dynamic routes?

Dynamic routes are a way to create flexible URLs that can respond to different parameters. In Next.js, dynamic routes are defined by using brackets in the filename of a page component (e.g. [id].js). These brackets indicate that the corresponding part of the URL is a dynamic parameter that can be replaced with any value at runtime.

For example, consider a blog website where each blog post has a unique ID. Using dynamic routes, you could create a page component that handles URLs like /blog/123 or /blog/456, where 123 and 456 are the IDs of different blog posts. The dynamic parameter ([id].js) allows you to create a single page component that can handle any blog post ID, rather than having to create a separate component for each post.

Dynamic routes are useful for several reasons:

Flexibility: Dynamic routes allow you to create URLs that can respond to different parameters, making your website more flexible and adaptable.

Scalability: By using dynamic routes, you can avoid creating multiple pages for similar content, which can help keep your codebase manageable and scalable.

Search Engine Optimization (SEO): Dynamic routes can improve SEO by creating more descriptive and user-friendly URLs that are easier for search engines to understand and index.

User experience: Dynamic routes can enhance the user experience by allowing users to easily navigate to different parts of your website using parameters in the URL.

In summary, dynamic routes are a powerful feature that allow you to create flexible, scalable, and user-friendly URLs in your Next.js application.

## Advice

Read the [official documentation](https://nextjs.org/docs/routing/dynamic-routes) before starting the exercise.

## Task 1

On the Home page is a list of persons, and each person contains information.
Your goal is to create a dynamic route so that by clicking on a person in the list you can navigate to a page named as the **_person's id_**.

## Task 2

Show on the person's page his or her information.

![example](./src//assets/dynamic-route.gif)

## Task 3

On the person page instead to display the person's data, display: &lt;p&gt;person not found&lt;/p&gt; if **_no person is found_** in the list that has that id.

## Task 4

If you are on the person page and refresh the browser, you will get an error because the **_router.query.id_** is undefined.
On the person page instead to display the the person's data, display: &lt;p&gt;loading...&lt;/p&gt; if **_router.query.id_** is undefined.

