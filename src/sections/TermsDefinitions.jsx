
import { useState } from 'react'
import Navbar from '../components/Navbar'

const categories = [
  {
    id: 'basic-concepts',
    label: 'A',
    title: 'Basic Concepts of Sets',
    terms: [
      {
        term: 'Set',
        definition: 'A well-defined collection of distinct objects or elements.',
      },
      {
        term: 'Element',
        definition: 'An individual object or member that belongs to a set.',
      },
      {
        term: 'Well-Defined Set',
        definition: 'A set in which it is clear whether an object belongs to it or not.',
      },
      {
        term: 'Roster Form',
        definition: 'A way of describing a set by listing all its elements inside curly brackets { }.',
      },
      {
        term: 'Descriptive Form',
        definition: 'A way of describing a set using words or a statement that explains its elements.',
      },
      {
        term: 'Set-Builder Form',
        definition: 'A way of describing a set by stating the common property or condition that its elements must satisfy.',
      },
      {
        term: '| (such that)',
        definition: 'The symbol | means "such that." It is used in set-builder form to separate the variable from the condition, e.g., {x | x is an even number}.',
      },
      {
        term: 'Finite Set',
        definition: 'A set that contains a limited number of elements.',
      },
      {
        term: 'Infinite Set',
        definition: 'A set that contains an unlimited number of elements.',
      },
      {
        term: 'Cardinality',
        definition: 'The number of distinct elements contained in a set, represented by n(A).',
      },
      {
        term: 'Universal Set',
        definition: 'A set that contains all the elements being considered in a particular situation.',
      },
    ],
  },
  {
    id: 'types-of-sets',
    label: 'B',
    title: 'Types and Classification of Sets',
    terms: [
      {
        term: 'Empty Set (∅)',
        definition: 'A set that contains no elements.',
      },
      {
        term: 'Singleton Set',
        definition: 'A set that contains exactly one element.',
      },
      {
        term: 'Equal Sets',
        definition: 'Two sets that contain exactly the same elements, regardless of their order.',
      },
      {
        term: 'Equivalent Sets',
        definition: 'Two sets that have the same number of elements.',
      },
      {
        term: 'Disjoint Sets',
        definition: 'Two sets that have no common elements.',
      },
      {
        term: 'Overlapping Sets',
        definition: 'Two sets that share at least one common element.',
      },
    ],
  },
  {
    id: 'set-relationships',
    label: 'C',
    title: 'Subsets and Set Relationships',
    terms: [
      {
        term: 'Subset (⊆)',
        definition: 'A set in which every element is also found in another set. A set is also a subset of itself.',
      },
      {
        term: 'Proper Subset (⊊)',
        definition: 'A subset that contains fewer elements than the original set and is not equal to it.',
      },
      {
        term: 'Superset (⊇)',
        definition: 'A set that contains all the elements of another set.',
      },
    ],
  },
  {
    id: 'set-operations',
    label: 'D',
    title: 'Basic Set Operations',
    terms: [
      {
        term: 'Set Operations',
        definition: 'Mathematical processes used to combine or compare two or more sets.',
      },
      {
        term: 'Union (∪)',
        definition: 'The operation that combines all elements from two or more sets without repeating any element.',
      },
      {
        term: 'Intersection (∩)',
        definition: 'The operation that identifies the elements common to two or more sets.',
      },
      {
        term: 'Complement (A′)',
        definition: 'The set of all elements in the universal set that do not belong to set A.',
      },
      {
        term: 'Difference (−)',
        definition: 'The operation that identifies the elements belonging to one set but not to another set.',
      },
    ],
  },
  {
    id: 'venn-diagrams',
    label: 'E',
    title: 'Venn Diagrams and Problem-Solving',
    terms: [
      {
        term: 'Venn Diagram',
        definition: 'A visual representation of sets using circles or other closed shapes to show relationships between them.',
      },
      {
        term: 'Overlapping Region',
        definition: 'The part of a Venn diagram where two or more sets share common elements.',
      },
      {
        term: 'Non-Overlapping Region',
        definition: 'The part of a Venn diagram that contains elements belonging to only one particular set.',
      },
      {
        term: 'Union Region',
        definition: 'The entire area covered by the circles representing the sets involved in a union.',
      },
      {
        term: 'Intersection Region',
        definition: 'The overlapping area of two or more circles that represents their common elements.',
      },
      {
        term: 'Set Notation',
        definition: 'The use of mathematical symbols to represent sets, their elements, and their relationships.',
      },
      {
        term: 'Set-Related Problem',
        definition: 'A mathematical problem involving the identification, comparison, or combination of elements from different sets.',
      },
      {
        term: 'Inclusion-Exclusion Principle',
        definition: 'A counting principle used to find the total number of elements in overlapping sets without counting common elements more than once.',
      },
    ],
  },
]

export default function TermsDefinitions() {
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()

  // Filter terms based on the search input
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      terms: category.terms.filter(
        (item) =>
          item.term.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.terms.length > 0)

  const totalTerms = categories.reduce(
    (total, category) => total + category.terms.length,
    0
  )

  const matchedTerms = filteredCategories.reduce(
    (total, category) => total + category.terms.length,
    0
  )

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Page Header */}
      <section className="bg-indigo-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Learning Resources
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Terms & Definitions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore and understand the essential mathematical
            terms, symbols, and concepts related to sets.
          </p>

          {/* Search Bar */}
          <div className="relative mt-8 max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms or definitions..."
              aria-label="Search terms and definitions"
              className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <p className="mt-4 text-sm text-slate-500" aria-live="polite">
            Showing {matchedTerms} of {totalTerms} terms
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row">

          {/* Category Navigation */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                Categories
              </h2>

              <nav
                aria-label="Terms categories"
                className="flex flex-wrap gap-2 lg:flex-col"
              >
                {filteredCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {category.label}. {category.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms and Definitions */}
          <main className="min-w-0 flex-1">
            {filteredCategories.length > 0 ? (
              <div className="space-y-14">
                {filteredCategories.map((category) => (
                  <section
                    key={category.id}
                    id={category.id}
                    className="scroll-mt-28"
                  >
                    {/* Category Header */}
                    <div className="mb-6 border-b border-slate-200 pb-5">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
                          {category.label}
                        </span>

                        <div>
                          <h2 className="text-xl font-bold md:text-2xl">
                            {category.title}
                          </h2>

                          <p className="mt-1 text-sm text-slate-500">
                            {category.terms.length} terms
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Terms Cards */}
                    <dl className="grid gap-5 md:grid-cols-2">
                      {category.terms.map((item) => (
                        <div
                          key={item.term}
                          className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-md"
                        >
                          <dt className="text-lg font-semibold text-indigo-600">
                            {item.term}
                          </dt>

                          <dd className="mt-3 text-sm leading-7 text-slate-600">
                            {item.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
                <h2 className="text-xl font-semibold">
                  No terms found
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  Try searching for a different word or definition.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Clear Search
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
