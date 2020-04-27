import { mount } from '@vue/test-utils'
import MailForm from '@/components/MailForm.vue'

describe('MailForm', () => {
	// Test 1 (cleanPhoneNo): it should be a number only.
	it('testing isValidPhone to be true with a number', () => {
		const testPhone = { cleanPhoneNo: 1 } // passing in first instance
		// console.log(MailForm.computed.isValidPhone.call(testPhone))
		expect(MailForm.computed.isValidPhone.call(testPhone)).toBeTruthy()
	})
})

describe('MailForm', () => {
	// Test 2 (cleanPhoneNo): it should be a number only & fail if a string or letter is entered.
	it('testing isValidPhone to be false with a number & letter', () => {
		const testPhone = { cleanPhoneNo: '1xY' } // passing in first instance
		// console.log(MailForm.computed.isValidPhone.call(testPhone))
		expect(MailForm.computed.isValidPhone.call(testPhone)).toBeFalsy()
	})
})

// describe('MailForm', () => {
// 	// Test 3 (guestPhone): it should clean out non-digit numbers and convert to number.
// 	it('tests if guestPhone input condences to a number', () => {
// 		const testPhone = { guestPhone: '1xY234' } // passing in first instance
// 		console.log(MailForm.computed.cleaningPhoneNo.call(testPhone))
// 		// expect(MailForm.computed.cleaningPhoneNo.call(testPhone)).toBe(1234)
// 	})
// })

describe('MailForm', () => {
	// Test 4 (guestPhone): it should contain more than 7 digits.
	it('tests if guestPhone is less than 7 digits, is', () => {
		const testPhone = { guestPhone: '1xY234' } // passing in first instance
		console.log(MailForm.computed.howLong.call(testPhone))
		// expect(MailForm.computed.cleaningPhoneNo.call(testPhone)).toBe(1234)
	})
})

// Test 3 (guestEmail): it should have two parts either side of the '@' sign.
// Test 4 (guestEmail): part 2, it should include a '.'
