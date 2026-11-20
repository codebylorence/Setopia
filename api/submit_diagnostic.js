
const answerLimits = [4, 4, 4, 4, 4, 4, 4, 2, 2, 2]

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed.',
    })
  }

  try {
    const { studentName, studentSection, answers } = req.body || {}

    // Validate student information and all 10 answers
    if (
      typeof studentName !== 'string' ||
      typeof studentSection !== 'string' ||
      !studentName.trim() ||
      !studentSection.trim() ||
      studentName.length > 100 ||
      studentSection.length > 100 ||
      !Array.isArray(answers) ||
      answers.length !== 10 ||
      !answers.every(
        (answer, index) =>
          Number.isInteger(answer) &&
          answer >= 0 &&
          answer < answerLimits[index]
      )
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid student information or answers.',
      })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    const secret = process.env.GOOGLE_SCRIPT_SECRET

    if (!scriptUrl || !secret) {
      return res.status(500).json({
        ok: false,
        error: 'Missing Google Apps Script configuration.',
      })
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        studentName: studentName.trim(),
        studentSection: studentSection.trim(),
        answers,
        secret,
      }),
      redirect: 'follow',
    })

    const responseText = await response.text()

    let result

    try {
      result = JSON.parse(responseText)
    } catch {
      throw new Error(
        'Google Apps Script did not return valid JSON. Check its deployment.'
      )
    }

    if (!response.ok || result.ok !== true) {
      return res.status(502).json({
        ok: false,
        error: result.error || 'Google Sheets could not save the submission.',
      })
    }

    return res.status(200).json({
      ok: true,
      score: result.score,
      total: result.total,
      message: result.message,
    })
  } catch (error) {
    console.error('Diagnostic submission error:', error)

    return res.status(502).json({
      ok: false,
      error: error.message || 'Unable to submit diagnostic test.',
    })
  }
}
